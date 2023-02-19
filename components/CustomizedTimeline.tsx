import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Favorite from "@mui/icons-material/Favorite";
import Bedtime from "@mui/icons-material/Bedtime";
import Cake from "@mui/icons-material/Cake";
import Nightlife from "@mui/icons-material/Nightlife";
import Restaurant from "@mui/icons-material/Restaurant";
import WineBar from "@mui/icons-material/WineBar";
import { useTranslation } from "next-i18next";

interface TimelineProps {
  locales: string;
}

export default function CustomizedTimeline(props: TimelineProps) {
  const { t } = useTranslation("common");

  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: 13,
            }}
          >
            17:00
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector
            sx={{
              background: "#b97b52",
            }}
          />
          <TimelineDot
            color="inherit"
            variant="outlined"
            sx={{
              color: "#b97b52",
            }}
          >
            <Favorite />
          </TimelineDot>
          <TimelineConnector
            sx={{
              background: "#b97b52",
            }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontSize: 14,
            }}
          >
            {t("program.ceremonyTitle")}
          </Typography>
          <Typography
            sx={{
              fontSize: 10,
            }}
          >
            {t("program.ceremonyText")}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
          <Typography
            variant="body2"
            sx={{
              fontSize: 13,
            }}
          >
            17:30
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector
            sx={{
              background: "#b97b52",
            }}
          />
          <TimelineDot
            color="inherit"
            variant="outlined"
            sx={{
              color: "#b97b52",
            }}
          >
            <WineBar />
          </TimelineDot>
          <TimelineConnector
            sx={{
              background: "#b97b52",
            }}
          ></TimelineConnector>
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontSize: 14,
            }}
          >
            {t("program.drinksTitle")}
          </Typography>
          <Typography
            sx={{
              fontSize: 10,
            }}
          >
            {t("program.drinksText")}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: 13,
            }}
          >
            18:30
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector
            sx={{
              background: "#b97b52",
            }}
          />
          <TimelineDot
            color="inherit"
            variant="outlined"
            sx={{
              color: "#b97b52",
            }}
          >
            <Restaurant />
          </TimelineDot>
          <TimelineConnector
            sx={{
              background: "#b97b52",
            }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontSize: 14,
            }}
          >
            {t("program.dinnerTitle")}
          </Typography>
          <Typography
            sx={{
              fontSize: 10,
            }}
          >
            {t("program.dinnerText")}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
        >
          {" "}
          <Typography
            variant="body2"
            sx={{
              fontSize: 13,
            }}
          >
            21:30
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector
            sx={{
              background: "#b97b52",
            }}
          />
          <TimelineDot
            color="inherit"
            variant="outlined"
            sx={{
              color: "#b97b52",
            }}
          >
            <Cake />
          </TimelineDot>
          <TimelineConnector
            sx={{
              background: "#b97b52",
            }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontSize: 14,
            }}
          >
            {t("program.cakeTitle")}
          </Typography>
          <Typography
            sx={{
              fontSize: 10,
            }}
          >
            {t("program.cakeText")}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
          <Typography
            variant="body2"
            sx={{
              fontSize: 13,
            }}
          >
            22:00
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector
            sx={{
              background: "#b97b52",
            }}
          />
          <TimelineDot
            color="inherit"
            variant="outlined"
            sx={{
              color: "#b97b52",
            }}
          >
            <Nightlife />
          </TimelineDot>
          <TimelineConnector
            sx={{
              background: "#b97b52",
            }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontSize: 14,
            }}
          >
            {t("program.partyTitle")}
          </Typography>
          <Typography
            sx={{
              fontSize: 10,
            }}
          >
            {t("program.partyText")}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
          <Typography
            variant="body2"
            sx={{
              fontSize: 13,
            }}
          >
            02:00
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector
            sx={{
              background: "#b97b52",
            }}
          />
          <TimelineDot
            color="inherit"
            variant="outlined"
            sx={{
              color: "#b97b52",
            }}
          >
            <Bedtime />
          </TimelineDot>
          <TimelineConnector
            sx={{
              background: "#b97b52",
            }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontSize: 14,
            }}
          >
            {t("program.endTitle")}
          </Typography>
          <Typography
            sx={{
              fontSize: 10,
            }}
          >
            {t("program.endText")}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
