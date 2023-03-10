interface Task {
  title: string;
  description: string;
  complete: boolean;
  logState: () => void;
  markCompleted: () => void;
}
