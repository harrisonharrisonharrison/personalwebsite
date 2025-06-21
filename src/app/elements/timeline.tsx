"use client";

import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

export function Time() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelinePoint/>
        <TimelineContent>
          <TimelineTime>april 2025</TimelineTime>
          <TimelineTitle>wip</TimelineTitle>
          <TimelineBody>
            insert description
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint/>
        <TimelineContent>
          <TimelineTime>april 2025</TimelineTime>
          <TimelineTitle>wip</TimelineTitle>
          <TimelineBody>
            insert description
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint/>
        <TimelineContent>
          <TimelineTime>june 2025</TimelineTime>
          <TimelineTitle>personal website</TimelineTitle>
          <TimelineBody>
            lol
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}