FreeCodeCamp API lesson - Timestamp
==========================

1- <b>User Story:</b> I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

2- <b>User Story:</b> If it does, it returns both the Unix timestamp and the natural language form of that date.

3- <b>User Story:</b> If it does not contain a date or Unix timestamp, it returns null for those properties.

[https://felipe-fcc-timestamp.glitch.me/](https://felipe-fcc-timestamp.glitch.me/)

<h3>Example</h3>
`https://felipe-fcc-timestamp.glitch.me/June%2006,%201993`

`https://felipe-fcc-timestamp.glitch.me/739324800`

<h3>Output</h3>
`{"unix":739324800,"natural":"Sun Jun 06 1993"}`

<h3>If error</h3>
`{"unix":null,"natural":null}`
