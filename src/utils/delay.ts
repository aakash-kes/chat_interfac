export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const getDummyResponse = async (message: string) => {
  await delay(1000)
  return `Thank you for your message: "${message}". This is a dummy response.`
}

