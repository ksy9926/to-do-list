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

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
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
          value={searchValue}
          ref={inputRef}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {(isFocused || searchValue) && (
          <ClearIcon
            style={{
              position: 'absolute',
              top: '50%',
              right: '5px',
              transform: 'translateY(-50%)',
            }}
            onClick={() => setSearchValue('')}
          />
        )}
      </InputDiv>
      <ProfileDiv>
        <ProfileIcon />
      </ProfileDiv>
    </HeaderWrap>
  );
};

export default Header;
