import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  ViewState,
  EditingState,
  IntegratedEditing
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  Toolbar,
  Appointments,
  ViewSwitcher,
  DateNavigator,
  TodayButton,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog
} from "@devexpress/dx-react-scheduler-material-ui";
import { withStyles } from '@material-ui/core/styles';


//Dummy Data
const brianAvailable = [
  {
    id: 1,
    startDate: "2019-11-15 10:00",
    endDate: "2019-11-15 11:00",
    title: "Available"
  }
];

const appointments = [
  {
    id: 1,
    startDate: "2019-10-31 10:00",
    endDate: "2019-10-31 11:00",
    title: "Meeting"
  },
  {
    id: 2,
    startDate: "2019-11-01 18:00",
    endDate: "2019-11-01 19:30",
    title: "Go to a gym"
  },
  {
    id: 3,
    startDate: "2019-11-15 7:00",
    endDate: "2019-11-15 7:30",
    title: "Grocery Store"
  },
  {
    id: 4,
    startDate: "2019-11-16 8:00",
    endDate: "2019-11-16 8:30",
    title: "Hair Cut",
    rRule: "FREQ=WEEKLY;COUNT=10"
  }
];

const style = ({ palette }) => ({
  icon: {
    color: palette.action.active,
  },
  textCenter: {
    textAlign: 'center',
  },
  firstRoom: {
    background: 'url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/Lobby-4.jpg)',
  },
  secondRoom: {
    background: 'url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/MeetingRoom-4.jpg)',
  },
  thirdRoom: {
    background: 'url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/MeetingRoom-0.jpg)',
  },
  header: {
    height: '260px',
    backgroundSize: 'cover',
  },
  commandButton: {
    backgroundColor: 'rgba(255,255,255,0.65)',
  },
});

const Content = withStyles(style, { name: 'Content' })(({
  children, appointmentData, classes, ...restProps
}) => (
  <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
        
        <a href="www.google.com">Book this appointment with an id of: {appointmentData.id}</a>

  </AppointmentTooltip.Content>
));



export default class MainCalendar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
      // currentDate: '2018-06-27'
      currentDate: new Date()
    };

    this.commitChanges = this.commitChanges.bind(this);
    this.currentDateChange = currentDate => {
      this.setState({ currentDate });
    };
  }

  commitChanges({ added, changed, deleted }) {
    this.setState(state => {
      let { data } = state;
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        );
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    const { currentDate, data } = this.state;

    return (
      <Paper>
        <Scheduler data={data} height={660}>
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={this.currentDateChange}
          />
          <EditingState onCommitChanges={this.commitChanges} />
          <IntegratedEditing />
          <WeekView startDayHour={5} endDayHour={19} />
          <DayView startDayHour={5} endDayHour={19} />
          <ConfirmationDialog />
          <Toolbar />
          <DateNavigator />
          <ViewSwitcher />
          <TodayButton />
          <Appointments />
          <AppointmentTooltip
            // showOpenButton
            showDeleteButton={false}
            contentComponent={Content}
          >
          </AppointmentTooltip>
          <AppointmentForm />
        </Scheduler>
      </Paper>
    );
  }
}