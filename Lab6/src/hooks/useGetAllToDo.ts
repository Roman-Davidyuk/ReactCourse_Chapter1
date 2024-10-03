import { useState, useEffect } from 'react';
import useLoading from './useLoading';
import { ToDo } from '../interfaces/toDo';

const useGetAllToDo = () => {
  const { isLoading, setIsLoading } = useLoading();
  const [data, setData] = useState<ToDo[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const json: ToDo[] = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setIsLoading]);

  return {
    isLoading,
    data,
    setData,
  };
};

export default useGetAllToDo;
