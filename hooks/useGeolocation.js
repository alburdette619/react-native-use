import { useEffect, useState, useCallback } from "react";

const useGeolocation = ({
  success,
  error,
  options = {},
  shouldWatch = false
}) => {
  const { geolocation } = navigator;
  const [state, setState] = useState({});

  const handleSuccess = useCallback(
    state => {
      setState(state);
      success(state);
    },
    [state]
  );
  const handleError = useCallback(
    state => {
      setState(state);
      error(state);
    },
    [state]
  );

  useEffect(() => {
    if (Object.keys(state).length === 0) {
      geolocation.getCurrentPosition(handleSuccess, handleError, options);
    }
  });

  let watchId;
  if (shouldWatch) {
    useEffect(() => {
      watchId = geolocation.watchPosition(handleSuccess, handleError, options);

      return () => {
        geolocation.clearWatch(watchId);
        watchId = null;
      };
    });
  } else if (watchId) {
    geolocation.clearWatch(watchId);
    watchId = null;
  }
};

export default useGeolocation;
