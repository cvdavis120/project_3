//appointments Reducer


const appointmentsReducerDefaultState = [
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

export default (state = appointmentsReducerDefaultState, action) => {
  switch (action.type) {
    case 'Test':
      return [
        ...state,
        action.appointment
      ];
    default: 
      return state;
  }
};