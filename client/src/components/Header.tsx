import { useRef, useCallback } from 'react';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { ReactComponent as TripbtozIcon } from 'assets/icons/logo.svg';
import { ReactComponent as ProfileIcon } from 'assets/icons/profile.svg';
import {
  HeaderWrap,
  LogoDiv,
  InputDiv,
  searchIconStyle,
  Input,
  ProfileDiv,
} from 'styles/headerStyle';

const Header = () => {
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
        <Input placeholder="검색" ref={inputRef} />
      </InputDiv>
      <ProfileDiv>
        <ProfileIcon />
      </ProfileDiv>
    </HeaderWrap>
  );
};

export default Header;
