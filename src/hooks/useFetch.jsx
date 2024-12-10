import axios from "axios";
import { useState } from "react";

function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  async function req({ url, method = "GET", body = null }) {
    setLoading(true);
    try {
      method = method.toUpperCase();
      const res = await axios({
        url,
        method,
        data: method !== "GET" ? body : null
      });
      const resData = res.data?.data || res.data;

      switch (method) {
        case "POST":
          setData(prev => [resData, ...prev]);
          break;
        case "PUT":
        case "PATCH":
          setData(prev => prev.map(item => item.id === resData.id ? resData : item));
          break;
        case "DELETE":
          const userId = parseInt(url.split('/').pop())
          setData(prev => prev.filter(item => item.id !== userId))
          break;
        default:
          setData(resData);
          break;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  return [data, req, loading];
}

export default useFetch;
