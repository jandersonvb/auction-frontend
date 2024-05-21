const extractErrorMessage = (error: any): string => {
  const errorMessage = error?.response?.data?.message || error?.message || error;

  if (Array.isArray(errorMessage)) {
    return errorMessage.join(', ');
  } else {
    return errorMessage;
  }
}

export { extractErrorMessage };