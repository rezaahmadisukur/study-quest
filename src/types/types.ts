export interface AchievementsType {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

export interface StatsType {
  level: number;
  streak: number;
  taskCompleted: number;
  totalXP: number;
}
