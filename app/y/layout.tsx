export const metadata = {
  title: "Studio",
  description: "Studio",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div>{children}</div>
  )
}