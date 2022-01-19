import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { TodoType } from 'types/types';
import { TodoDiv, TodoInfo, TodoContent } from 'styles/todoStyle';
import { ReactComponent as CheckCircleIcon } from 'assets/icons/check_circle.svg';
import { ReactComponent as EmptyCircleIcon } from 'assets/icons/empty_circle.svg';
import { ReactComponent as EmptyStarIcon } from 'assets/icons/empty_star.svg';
import { ReactComponent as FullStarIcon } from 'assets/icons/full_star.svg';
import { putTodosAsync } from 'redux/actions/todosAction';
import { setSelected } from 'redux/actions/selectedAction';
import { getFormatDate } from 'utils/date';

export const TodoList = ({ completed, menu }: { completed: Boolean; menu: string }) => {
  const { data: todos, error } = useSelector((state: RootState) => state.todo.todos);
  const { value } = useSelector((state: RootState) => state.search);
  const { id: selectedId } = useSelector((state: RootState) => state.selected);
  const dispatch = useDispatch();

  if (error) console.log(error);

  const putCompletedData = (todoid: number, index: number) => {
    const todo = { ...todos[index] };

    todo.completedAt = todo.completed ? '' : getFormatDate();
    todo.completed = !todo.completed;

    dispatch(putTodosAsync.request({ todoid: todoid, todo: todo, index: index }));
  };

  const putImportantData = (todoid: number, index: number) => {
    const todo = { ...todos[index] };

    todo.important = !todo.important;

    dispatch(putTodosAsync.request({ todoid: todoid, todo: todo, index: index }));
  };

  const todoList = todos.map((item: TodoType, i: number) => {
    if (menu === 'important' && !item.important) return;
    if (item.completed === completed && item.content.toLowerCase().includes(value)) {
      return (
        <TodoDiv selected={selectedId === i} key={i} onClick={() => dispatch(setSelected(i))}>
          {item.completed ? (
            <CheckCircleIcon onClick={() => putCompletedData(item.todoid, i)} />
          ) : (
            <EmptyCircleIcon onClick={() => putCompletedData(item.todoid, i)} />
          )}
          <TodoInfo>
            <TodoContent>{item.content}</TodoContent>
            <div style={{ padding: '2px 0' }}>
              <span>{completed ? '완료' : '진행중'}</span>
              <span style={{ marginLeft: '10px' }}>{item.createdAt.slice(0, 10)}</span>
            </div>
          </TodoInfo>
          {item.important ? (
            <FullStarIcon onClick={() => putImportantData(item.todoid, i)} />
          ) : (
            <EmptyStarIcon onClick={() => putImportantData(item.todoid, i)} />
          )}
        </TodoDiv>
      );
    }
  });

  return <>{todoList}</>;
};
