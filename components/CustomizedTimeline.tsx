import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import {
  Bedtime,
  Cake,
  DinnerDining,
  Favorite,
  Nightlife,
  Restaurant,
  WineBar,
} from "@mui/icons-material";
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
          sx={{ m: "auto 0", color: "#ffffff" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          17:00
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            sx={{
              color: "#b97b52",
            }}
          >
            <Favorite />
          </TimelineDot>
          <TimelineConnector />
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
        <TimelineOppositeContent
          sx={{ m: "auto 0", color: "#ffffff" }}
          variant="body2"
          color="text.primary"
        >
          17:30
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            sx={{
              color: "#b97b52",
            }}
          >
            <WineBar />
          </TimelineDot>
          <TimelineConnector />
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
          sx={{ m: "auto 0", color: "#ffffff" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          18:30
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            sx={{
              color: "#b97b52",
            }}
          >
            <Restaurant />
          </TimelineDot>
          <TimelineConnector />
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
          sx={{ m: "auto 0", color: "#ffffff" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          21:30
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            sx={{
              color: "#b97b52",
            }}
          >
            <Cake />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontSize: 14,
            }}
          >
            {t("program.cake")}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0", color: "#ffffff" }}
          variant="body2"
          color="text.secondary"
        >
          22:00
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            sx={{
              color: "#b97b52",
            }}
          >
            <Nightlife />
          </TimelineDot>
          <TimelineConnector />
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
        <TimelineOppositeContent
          sx={{ m: "auto 0", color: "#ffffff" }}
          variant="body2"
          color="text.secondary"
        >
          02:00
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            sx={{
              color: "#b97b52",
            }}
          >
            <Bedtime />
          </TimelineDot>
          <TimelineConnector />
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
      {/* 
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <Restaurant />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Sleep
          </Typography>
          <Typography>Because you need rest</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Repeat
          </Typography>
          <Typography>Because this is the life you love!</Typography>
        </TimelineContent>
      </TimelineItem>*/}
    </Timeline>
  );
}
