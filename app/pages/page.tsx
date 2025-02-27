import ProgressB from "components/progress/progress";

import WidgetCalendar from "components/widgets/WidgetCalendar";
import TodoList from "../components/todoList/todo";
import ToolsAndWebsites from "../components/widgets/Tools";
import DailyPlan from "../components/dailyPlan/DailyPlan";
import { ModulesProgress } from "../components/overview/moduleProgress";
import {
  Widgetlayout,
  LayoutToolsandTodo,
  LayoutPlanCal,
  PageContainer,
  OverviewContainer,
  BoxContainer,
} from "../../app/pages/style";

const HomePage = () => {
  return (
    <PageContainer>
      <Widgetlayout>
        <OverviewContainer>
          <ModulesProgress />
        </OverviewContainer>
        <BoxContainer>
          <LayoutPlanCal>
            <DailyPlan />
            <WidgetCalendar />
          </LayoutPlanCal>
          <LayoutToolsandTodo>
            <ToolsAndWebsites />
            <TodoList />
          </LayoutToolsandTodo>
        </BoxContainer>
      </Widgetlayout>
      <ProgressB />
    </PageContainer>
  );
};

export default HomePage;
 