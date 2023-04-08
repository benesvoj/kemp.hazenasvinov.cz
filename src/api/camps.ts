import { CampItem } from "../types/types";
import { getAPI } from "./ApiService";
import { useEffect, useState } from "react";

export const getCamps = () => {
  const [data, setData] = useState<CampItem[]>([]);

  const getData = () =>
    getAPI("camps").then((res) => {
      if (res.status === 200) {
        setData(res.data);
        window.console.log(res.data);
      } else {
        window.console.log(res);
      }
    });

  useEffect(() => {
    getData();
  }, []);

  return data;
};
