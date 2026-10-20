export type ActivityImage = {
  src?: string;
  captionKey: string;
};

export const activityImages: ActivityImage[] = [
  { src: "/images/activity-1.jpg", captionKey: "banner" },
  {
    src: "/images/outdoor-community-discussion.jpg",
    captionKey: "discussion",
  },
  { src: "/images/community-event-tent.jpg", captionKey: "communityEvent" },
  {
    src: "/images/community-members-gathering.jpg",
    captionKey: "communityGathering",
  },
  { src: "/images/family-community-event.jpg", captionKey: "families" },
  { src: "/images/volunteers-serving-food.jpg", captionKey: "servingFood" },
  {
    src: "/images/community-courtyard-gathering.jpg",
    captionKey: "courtyardEvent",
  },
  { src: "/images/children-at-community-event.jpg", captionKey: "children" },
  { src: "/images/community-food-preparation.jpg", captionKey: "foodPrep" },
  { src: "/images/community-barbecue.jpg", captionKey: "barbecue" },
  { src: "/images/community-workshop.jpg", captionKey: "communityMeetup" },
  { src: "/images/volunteers-at-barbecue.jpg", captionKey: "volunteers" },
  { src: "/images/indoor-community-meeting.jpg", captionKey: "indoorMeeting" },
];
