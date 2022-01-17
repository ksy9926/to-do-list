import { useRef, useState, useCallback } from 'react';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { ReactComponent as TripbtozIcon } from 'assets/icons/logo.svg';
import { ReactComponent as ProfileIcon } from 'assets/icons/profile.svg';
import { ReactComponent as ClearIcon } from 'assets/icons/clear.svg';
import {
  HeaderWrap,
  LogoDiv,
  InputDiv,
  searchIconStyle,
  Input,
  ProfileDiv,
} from 'styles/headerStyle';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { setSearchValue } from 'redux/actions/searchAction';
import { debounce } from 'utils/debounce';

const Header = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.search);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onFocusHandler = useCallback((): void => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <HeaderWrap>
      <LogoDiv>
        <TripbtozIcon style={{ marginRight: '10px' }} />
        To Do
      </LogoDiv>
      <InputDiv>
        <SearchIcon style={searchIconStyle} onClick={onFocusHandler} />
        <Input
          placeholder={isFocused ? '검색' : ''}
          ref={inputRef}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => debounce(() => dispatch(setSearchValue(e.target.value)), 300)}
        />
        {(isFocused || value) && (
          <ClearIcon
            style={{
              position: 'absolute',
              top: '50%',
              right: '5px',
              transform: 'translateY(-50%)',
            }}
            onClick={() => {
              dispatch(setSearchValue(''));
              if (inputRef.current) inputRef.current.value = '';
            }}
          />
        )}
      </InputDiv>
      <ProfileDiv>
        <ProfileIcon
          onClick={() => {
            alert('준비중입니다!');
          }}
        />
      </ProfileDiv>
    </HeaderWrap>
  );
};

export default Header;
