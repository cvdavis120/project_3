import * as React from "react";
import { connect } from "react-redux";
import { addAppointment, deleteAppointment } from "../../actions/appointments";
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
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import API from "../../utils/API";

const style = ({ palette }) => ({
  icon: {
    color: palette.action.active
  },
  textCenter: {
    textAlign: "center"
  },
  firstRoom: {
    background:
      "url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/Lobby-4.jpg)"
  },
  secondRoom: {
    background:
      "url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/MeetingRoom-4.jpg)"
  },
  thirdRoom: {
    background:
      "url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/MeetingRoom-0.jpg)"
  },
  header: {
    height: "260px",
    backgroundSize: "cover"
  },
  commandButton: {
    backgroundColor: "rgba(255,255,255,0.65)"
  }
});

const Content = withStyles(style, { name: "Content" })(
  ({ children, appointmentData, classes, ...restProps }) => (
    <AppointmentTooltip.Content
      {...restProps}
      appointmentData={appointmentData}
    >
      <Link to={`/editappointment/${appointmentData.id}`}>
        <h2>Schedule appointment</h2>
      </Link>
    </AppointmentTooltip.Content>
  )
);

class MainCalendar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.appointments,
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
        this.props.dispatch(addAppointment(data[startingAddedId - 1]));
       
        API.addEvent(data[startingAddedId - 1])
          .then(res => {
            console.log(res.data)
          }
        )
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
        this.props.dispatch(deleteAppointment(deleted));
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
            showOpenButton
            showDeleteButton={true}
            contentComponent={Content}
          ></AppointmentTooltip>
          <AppointmentForm />
        </Scheduler>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    appointments: state.appointments
  };
};

export default connect(mapStateToProps)(MainCalendar);
