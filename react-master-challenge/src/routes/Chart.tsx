import React from "react";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api.ts";

interface CharProps {
  coinId: string;
}

function Chart({ coinId }: CharProps) {
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return <h1>Chart</h1>;
}

export default Chart;
