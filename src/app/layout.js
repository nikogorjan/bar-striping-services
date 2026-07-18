import "../../public/assets/css/plugins/fontawesome-5.css";
import "../../public/assets/css/plugins/animate.min.css";
import "../../public/assets/css/plugins/unicons.css";

import "../../public/assets/css/vendor/bootstrap.min.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/bar-theme.css";

export const metadata = {
  title: "BAR Striping Services | Parking Lot Striping",
  description:
    "Professional parking lot striping, re-striping, and ADA-compliant pavement markings. Locally owned and operated by Henry Randall. Call 205-240-3158 for a free quote.",
  icons: {
    icon: "/assets/images/logo/bar-favicon.svg",
  },
  openGraph: {
    title: "BAR Striping Services | Parking Lot Striping",
    description:
      "Crisp lines. Safe lots. Done right. Professional parking lot striping — call 205-240-3158 for a free quote.",
    type: "website",
    images: ["/LOGO.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="index-one">
        {children}
      </body>
    </html>
  );
}
