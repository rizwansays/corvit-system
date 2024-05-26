import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
export default function NavLinks() {
  const [heading, setHeading] = useState("");
  const links = [
    // { path: "home", name: "Home" },
    // { path: "about-us", name: "About Us",
    // submenu: true,
    // sublinks: [
    //   {
    //     // Head: "TopWear",
    //     sublink: [
    //       { name: "Introduction", path: "about-us/introduction" },
    //       { name: "Our Advantage", path: "about-us/our-advantage"},
    //     ],
    //   },
    // ],
    //  },
    {
      path: "courses",
      name: "Courses",
      submenu: true,
      sublinks: [
        {
          // Head: "TopWear",
          sublink: [
            { name: "Web Development", path: "courses/web-development" },
            {
              name: "SEO & DigitalMarketing",
              path: "courses/seo-digital-marketing",
            },
          ],
        },
      ],
    },
    // { path: "services", name: "Services" },
    { path: "class-schedule", name: "Class Schedule",
    submenu: true,
    sublinks: [
      {
        // Head: "TopWear",
        sublink: [
          { name: "Bahawalpur Schedule", path: "class-schedule/bahawalpur-schedule" },
          { name: "Lahore Schedule", path: "class-schedule/lahore-schedule" },
          { name: "Rawalpindi Schedule", path: "class-schedule/rawalpindi-schedule" },
          { name: "Islamabad Schedule", path: "class-schedule/islamabad-schedule" },
          
        ],
      },
    ],
     },
    { path: "corporate-Trainings", name: "Corporate Trainings",
    submenu: true,
    sublinks: [
      {
        // Head: "TopWear",
        sublink: [
          { name: "PM KAMYAB JAWAN PROGRAM", path: "corporate-Trainings/pm-kamyab-jawan-program" },
          {
            name: "AKHUWAT TRAININGS",
            path: "corporate-Trainings/akhuwat-trainings",
          },
        ],
      },
    ],
     },
    // { path: "fee", name: "Fee" },
    { path: "gallery", name: "Gallery",
    submenu: true,
    sublinks: [
      {
        // Head: "TopWear",
        sublink: [
          { name: "Events", path: "gallery/events" },
          
        ],
      },
    ],
     },
  ];

  return (
    <>
      <div className="flex lg:flex-row flex-col lg:gap-6 gap-2 lg:justify-between relative lg:items-center">
      <NavLink
        to="home"
        className={(navClass) => (navClass.isActive ? "nav__active " : "")}
      >
        <h1 className="pb-7 lg:pb-0 hover:text-red-500">Home</h1>
      </NavLink>
      <NavLink
        to="about-us"
        className={(navClass) => (navClass.isActive ? "nav__active " : "")}
      >
        <h1 className="pb-3 lg:pb-0 hover:text-red-500">About</h1>
      </NavLink>
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.path}
          className={(navClass) => (navClass.isActive ? "nav__active" : "")}
        >
          <div className="group">
            <h1
              className="py-4 hover:text-red-500 flex justify-between items-center gap-1 group "
              onClick={() =>
                heading !== link.name ? setHeading(link.name) : setHeading("")
              }
            >
              {link.name}
              <span className="lg:hidden ">
                {heading === link.name ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
              <span className="hidden lg:block">
                <IoIosArrowDown className="group-hover:rotate-180 hover:rotate-180" />
              </span>
            </h1>
            {link.submenu && (
              <div className="">
                <div className="absolute top-7  hidden group-hover:lg:block hover:lg:block z-50 ">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-slate-800 rotate-45"></div>
                  </div>
                  <div className="bg-slate-800 p-3.5 z-50 ">
                    {link.sublinks.map((mysublinks, i) => (
                      <div key={i}>
                        {/* <h1 className="text-red-600">{mysublinks.Head}</h1> */}
                        {mysublinks.sublink.map((slink, i) => (
                          <li className="text-sm text-white my-2.5  hover:text-red-600 hover:bg-black/70 z-50  p-1.5 " key={i}>
                            <NavLink to={slink.path}  className={(navClass) => (navClass.isActive ? "nav__active " : "")}>
                              {slink.name}
                            </NavLink>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile menu  */}
          <div className={`${heading === link.name ? "lg:hidden" : "hidden"}`}>
            {link.submenu && (
              <div className="-my-4">
                <div className="">
                  <div className="">
                    {link.sublinks.map((mysublinks, i) => (
                      <div>
                        {/* <h1 className="text-red-600">{mysublinks.Head}</h1> */}
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-black my-3.5 mx-10 hover:text-red-600 ">
                            <Link to={slink.path} key={i}>
                              <h1>{slink.name}</h1>
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </NavLink>
      ))}

    <NavLink
        to="fee"
        className={(navClass) => (navClass.isActive ? "nav__active " : "")}
      >
        <h1 className="pt-4 lg:pt-0 hover:text-red-500">Fee</h1>
      </NavLink>
    {/* <NavLink
        to="gallery"
        className={(navClass) => (navClass.isActive ? "nav__active " : "")}
      >
        <h1>Gallery</h1>
      </NavLink> */}
      </div>
    </>
  );
}
