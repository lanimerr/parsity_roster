import Link from 'next/link';

export default function RootLayout({children}) {
  return (
    <html lamg='en'>
      <body>
        <nav>
          <ul>
            <li>
              <link href='/'>Home</link>
            </li>
            <li>
              <link href='/about'>About</link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
