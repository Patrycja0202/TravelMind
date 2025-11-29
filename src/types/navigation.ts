export type Goal = {
  id: string;
  country: string;
  flag: string;
  location: string;
  date: string;
  completed: boolean;
};

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  MainTabs: undefined;
  AddCountry: undefined;
  AddGoal: undefined;
  GoalDetails: { goal: Goal };
};

export type MainTabParamList = {
  Dashboard: undefined;
  BucketList: undefined;
  Goals: undefined;
  Profile: undefined;
};
