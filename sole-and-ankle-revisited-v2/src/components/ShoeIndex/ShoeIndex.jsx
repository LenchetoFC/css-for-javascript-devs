import React from "react";
import styled from "styled-components";

import { WEIGHTS, QUERIES } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <TitleContainer>
            <Breadcrumbs>
              <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
              <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
              <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
            </Breadcrumbs>
            <Title>Running</Title>
          </TitleContainer>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  & nav:first-child {
    display: none;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const LeftColumn = styled.div`
  flex-basis: 248px;
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;

  @media ${QUERIES.tabletMaxWidth} {
    ${LeftColumn} {
      display: none;
    }

    ${TitleContainer} nav:first-child {
      display: flex;
    }
  }

  @media ${QUERIES.phoneMaxWidth} {
    ${MainColumn} label:has(select) {
      display: none;
    }
  }
`;

export default ShoeIndex;
