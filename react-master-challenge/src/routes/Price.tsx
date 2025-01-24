import React from "react";
import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api.ts";
import styled from "styled-components";

interface CharProps {
  coinId: string;
}

interface IHistorical {
  time_open: number;
  time_close: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

const PriceLi = styled.ul`
  display: flex;
  align-items: center;
`;

const H2 = styled.h2`
  font-size: 32px;
  font-weight: 500;
  padding-bottom: 5px;
`;

const Span = styled.span`
  font-size: 20px;
  font-weight: 300;
`;

function Price() {
  const { coinId } = useOutletContext() as CharProps;
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["per", coinId],
    () => fetchCoinHistory(coinId)
    // {
    //   refetchInterval: 10000,
    // }
  );
  const firstDay = data?.slice(0, 1);
  const lastDay = data?.slice(1, -1);
  console.log(firstDay);
  console.log(lastDay);
  return (
    <>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ul>
          {lastDay?.map((lastPrice, lastIndex) =>
            firstDay?.map((firstPrice) => (
              <PriceLi key={lastIndex}>
                <H2>{lastIndex + 1} Day DIFF:</H2>
                <Span>{lastPrice.close - firstPrice.close}</Span>
              </PriceLi>
            ))
          )}
        </ul>
      )}
    </>
  );
  // return <h1>Price</h1>;
}

export default Price;
