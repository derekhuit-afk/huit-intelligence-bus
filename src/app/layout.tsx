export const metadata = {
  title: 'Huit Intelligence Bus',
  description: 'Internal event routing and intelligence relay for Huit.AI',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
