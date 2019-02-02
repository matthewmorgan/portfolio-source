import superagent from "superagent"


export async function getDadJoke() {
  const resp = await superagent
      .get('https://icanhazdadjoke.com/')
      .set('accept', 'text/plain')
  return resp.text
}
