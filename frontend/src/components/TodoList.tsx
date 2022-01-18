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

export const TodoList = ({ completed }: { completed: Boolean }) => {
  const { data: todos, error } = useSelector((state: RootState) => state.todo.todos);
  const { value } = useSelector((state: RootState) => state.search);
  const { id: selectedId } = useSelector((state: RootState) => state.selected);
  const dispatch = useDispatch();

  if (error) console.log(error);

  const putData = (todoid: number, index: number) => {
    const todo = { ...todos[index] };

    todo.completedAt = todo.completed ? '' : getFormatDate();
    todo.completed = !todo.completed;

    dispatch(putTodosAsync.request({ todoid: todoid, todo: todo, index: index }));
  };

  const todoList = todos.map((item: TodoType, i: number) => {
    if (item.completed === completed && item.content.includes(value)) {
      return (
        <TodoDiv selected={selectedId === i} key={i} onClick={() => dispatch(setSelected(i))}>
          {item.completed ? (
            <CheckCircleIcon onClick={() => putData(item.todoid, i)} />
          ) : (
            <EmptyCircleIcon onClick={() => putData(item.todoid, i)} />
          )}
          <TodoInfo>
            <TodoContent style={{}}>{item.content}</TodoContent>
            <div style={{ padding: '2px 0' }}>
              <span>{completed ? '완료' : '진행중'}</span>
              <span style={{ marginLeft: '10px' }}>{item.createdAt.slice(0, 10)}</span>
            </div>
          </TodoInfo>
          <EmptyStarIcon />
        </TodoDiv>
      );
    }
  });

  return <>{todoList}</>;
};
