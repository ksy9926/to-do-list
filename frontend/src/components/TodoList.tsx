import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { TodoType } from 'types/types';
import { TodoDiv, TodoInfo } from 'styles/todoStylel';
import { ReactComponent as CheckCircleIcon } from 'assets/icons/check_circle.svg';
import { ReactComponent as EmptyCircleIcon } from 'assets/icons/empty_circle.svg';
import { ReactComponent as EmptyStarIcon } from 'assets/icons/empty_star.svg';
import { ReactComponent as FullStarIcon } from 'assets/icons/full_star.svg';
import { deleteTodosAsync, putTodosAsync } from 'redux/actions/todosAction';
import { setSelected } from 'redux/actions/selectedAction';
import { getFormatDate } from 'utils/date';

export const TodoList = ({ completed }: { completed: Boolean }) => {
  const { data: todos, error } = useSelector((state: RootState) => state.todo.todos);
  const { value } = useSelector((state: RootState) => state.search);
  const { id: selectedId } = useSelector((state: RootState) => state.selected);
  const dispatch = useDispatch();

  console.log('todos: ', todos);

  if (error) console.log(error);

  const putData = (todoid: number, index: number) => {
    const todo = { ...todos[index] };

    todo.completedAt = todo.completed ? '' : getFormatDate();
    console.log('completedAt: ', todo.completedAt);
    todo.completed = !todo.completed;

    dispatch(putTodosAsync.request({ todoid: todoid, todo: todo, index: index }));
  };

  const deleteData = (todoid: number) => {
    dispatch(deleteTodosAsync.request(todoid));
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
            <div
              style={{
                padding: '2px 0',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {item.content}
            </div>
            <div style={{ padding: '2px 0' }}>
              <span>작업</span>
              <span style={{ marginLeft: '15px' }}>{item.createdAt.slice(0, 10)}</span>
            </div>
          </TodoInfo>
          <EmptyStarIcon />
        </TodoDiv>
      );
    }
  });

  return <div>{todoList}</div>;
};
