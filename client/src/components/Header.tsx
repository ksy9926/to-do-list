import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import COLOR_PALETTE from 'styles/colors';
import SearchIcon from 'icons/codicon_search.svg';

const HeaderWrap = styled.header`
  display: flex; 
  justify-content: space-between;
  align-items: center;

  height: 50px;
  background: ${COLOR_PALETTE.PINK500};
`

const InputDiv = styled.div`
  position: relative;
`

const SearchImage = styled.img`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);

  width: 20px;
  height: 20px;

  cursor: pointer;
`

const Input = styled.input`
  height: 30px;
  width: 300px;
  padding-left: 50px;
  border: none;
  border-radius: 3px;
  background: ${COLOR_PALETTE.PINK200};

  &:hover {
    background: #fff;
  }
  &:focus {
    outline: none;
  }
`
const LogoDiv = styled.div`
  font-weight: bold;
  color: #fff;
  margin: 10px;
`
const ProfileDiv = styled.div`
  font-weight: bold;
  color: #fff;
  margin: 10px;
`

const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onFocusHandler = () => {
    if (!inputRef.current) return;
    inputRef.current.focus()
  }

  return (
    <HeaderWrap>
      <LogoDiv>To Do</LogoDiv>
      <InputDiv>
        <SearchImage src={SearchIcon} onClick={onFocusHandler} />
        <Input placeholder='검색' ref={inputRef} />
      </InputDiv>
      <ProfileDiv>프로필</ProfileDiv>
    </HeaderWrap>
  );
};

export default Header;