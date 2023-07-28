import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useAuth } from "../../context/AuthContext";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const currentDate = new Date();
  const [currentEvents, setCurrentEvents] = useState([]);

  const user = useAuth();

  let fetchedEvents = [];
  // [
  //   {
  //     id: 1,
  //     title: "event 1",
  //     start: "2023-07-14T10:00:00",
  //     end: "2023-07-14T12:00:00",
  //   },]
  // const Ewents = [
  //   {
  //     id: 1,
  //     title: "event 1",
  //     start: "2023-07-14T10:00:00",
  //     end: "2023-07-14T12:00:00",
  //   },
  //   {
  //     id: 2,
  //     title: "event 2",
  //     start: "2023-07-16T13:00:00",
  //     end: "2023-07-16T18:00:00",
  //   },
  //   {
  //     id: 3,
  //     title: "event 3",
  //     start: "2023-07-17",
  //     end: "2023-07-20",
  //   },
  // ];

  useEffect(() => {
    // Update the document title using the browser API

    fetch(`http://localhost:5000/teacher/${user.id}`)
      .then((response) => response.json())
      .then((res) => {
        const convertedEvents = res.map((event, index) => ({
          id: event._id,
          title: event.title,
          start: event.startTime,
          end: event.endTime,
        }));
        setCurrentEvents(convertedEvents);
        // console.log(convertedEvents);
      });
  }, []);

  const handleDateClick = (selected) => {
    if (selected.start > currentDate || true) {
      const title = prompt("Please enter a new title for your event");
      const calendarApi = selected.view.calendar;
      calendarApi.unselect();

      if (title) {
        let event1 = {
          teacher: user.id,
          title,
          subject: user.subject,
          startTime: selected.startStr,
          endTime: selected.endStr,
        };

        // POST request using fetch()
        fetch("http://localhost:5000/class/new", {
          mode: "cors",
          method: "POST",
          body: JSON.stringify(event1),

          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((res) => {
            // console.log(res);

            calendarApi.addEvent({
              id: res,
              title,
              start: selected.startStr,
              end: selected.endStr,
              allDay: selected.allDay,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      alert("Can only set events for future dates ");
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      // Send event id to the back to delete the event
      fetch(`http://localhost:5000/class/${selected.event.id}`, {
        method: "DELETE",
      }).then(() => {
        selected.event.remove();
        console.log("Deleted");
      });
    }
  };

  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  // secondary={
                  //   <Typography>
                  //     {formatDate(event.start, {
                  //       year: "numeric",
                  //       month: "short",
                  //       day: "numeric",
                  //     })}
                  //   </Typography>
                  // }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="timeGridDay"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            // eventsSet={(fetchedEvents) => setCurrentEvents(fetchedEvents)}
            events={currentEvents}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
