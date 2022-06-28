export const fetchFlag = async () => {
  const config = useRuntimeConfig();

  const url = 'https://' + config.API_URL + 'country';

  return await $fetch(url)
}

export const checkAnswer = async (params: object) => {
  const config = useRuntimeConfig();
  const url = 'https://' + config.API_URL + 'country/checkAnswer';
  return await $fetch(url, {
    body: params,
    method: 'POST'
  });
}
