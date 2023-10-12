import { SelectedCamp } from "../types/types";
import { useEffect, useState } from "react";
import axios from "axios";

export const getParticipantsCount = (id: number) => {
  const [count, setCount] = useState<SelectedCamp[]>([]);

  const getParticipants = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/participants`,
      {
        params: { selectedCamp: id },
      },
    );
    setCount(data);
  };

  useEffect(() => {
    getParticipants();
  }, []);

  return count.length;
};
