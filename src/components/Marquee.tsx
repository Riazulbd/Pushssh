export default function Marquee() {
  const logos = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC6Y_v_D_v_7Sk0F37ltYj6oMe_8LgwkIS_JeQo6vWJMWUwkvyM16VLVZ_nTQ1UKWE0Hbo8fyplcHrm9E37YKpeoNWCJza-pzCQDX_cVlSyjUIEXQn3F4s9bDk4ev7-F8gewMOYPa6fZq7EAK4F04zcueRENN6Ppwv06pmNg7o3aPlaUKomq_qb5cQ6W9Aw4ix5MOx6shLESZZLaecfrUNyrw7A9JAYmdYJzUKp",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDdT8kWJKSDGZXeBcJCBYEwpuvJtAPOH4m1M965bvLptz4bZfW_cwo-eZ32lz5Kxh6BLzNKE9bb78wigAyySqyB7AVSaB1ejR0zIQnVOg14Wed5BzKTPMWkazfBF_eD5JL9vTA2dMj9FDVR1InEzxYWCqc1A-d-1ubU0sau6C9JW6_WGUy1qfFTQDhwpXZD4YFJiEZiDOhRIsdHB1FLZEUecV8fdSjbMDIUuAepGPc9JbjFyk3VE4ggPdvcCZKiCWMh8sUZRboGXj3v",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBUPnMOteDeW8u4-CwBeojtKHbWJtrafBXVV1GAYPvzl7HncGq8rie3JK9Tkjr7nEuYp23XlYXxlwXMaZzzWQ05P4h46M-Odaxlf-5pR8nRt71NB9vdmMP1OGN1Mph5vD9TQqsXHMFyhVRI6bn1fK-dOt28eKzUft3naX89_u5avnKKoBAJ55ikivBTpPeftwpIh13IoKWUipPUUmnCN2_Z-aPZj2vxlcGAaBt9MG3j2Lf1h9HDK8qEZNYXAzRTqQHjEvtQs4w342bS",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBh7e-uYTAqCoBl89E_pHIoKLyHM6fnA9rMbrP1mAT9LQp99_v_7Sk0F37ltYj6oMe_8LgwkIS_JeQo6vWJMWUwkvyM16VLVZ_nTQ1UKWE0Hbo8fyplcHrm9E37YKpeoNWCJza-pzCQDX_cVlSyjUIEXQn3F4s9bDk4ev7-F8gewMOYPa6fZq7EAK4F04zcueRENN6Ppwv06pmNg7o3aPlaUKomq_qb5cQ6W9Aw4ix5MOx6shLESZZLaecfrUNyrw7A9JAYmdYJzUKp",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDdT8kWJKSDGZXeBcJCBYEwpuvJtAPOH4m1M965bvLptz4bZfW_cwo-eZ32lz5Kxh6BLzNKE9bb78wigAyySqyB7AVSaB1ejR0zIQnVOg14Wed5BzKTPMWkazfBF_eD5JL9vTA2dMj9FDVR1InEzxYWCqc1A-d-1ubU0sau6C9JW6_WGUy1qfFTQDhwpXZD4YFJiEZiDOhRIsdHB1FLZEUecV8fdSjbMDIUuAepGPc9JbjFyk3VE4ggPdvcCZKiCWMh8sUZRboGXj3v",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBUPnMOteDeW8u4-CwBeojtKHbWJtrafBXVV1GAYPvzl7HncGq8rie3JK9Tkjr7nEuYp23XlYXxlwXMaZzzWQ05P4h46M-Odaxlf-5pR8nRt71NB9vdmMP1OGN1Mph5vD9TQqsXHMFyhVRI6bn1fK-dOt28eKzUft3naX89_u5avnKKoBAJ55ikivBTpPeftwpIh13IoKWUipPUUmnCN2_Z-aPZj2vxlcGAaBt9MG3j2Lf1h9HDK8qEZNYXAzRTqQHjEvtQs4w342bS",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBh7e-uYTAqCoBl89E_pHIoKLyHM6fnA9rMbrP1mAT9LQp99_v_7Sk0F37ltYj6oMe_8LgwkIS_JeQo6vWJMWUwkvyM16VLVZ_nTQ1UKWE0Hbo8fyplcHrm9E37YKpeoNWCJza-pzCQDX_cVlSyjUIEXQn3F4s9bDk4ev7-F8gewMOYPa6fZq7EAK4F04zcueRENN6Ppwv06pmNg7o3aPlaUKomq_qb5cQ6W9Aw4ix5MOx6shLESZZLaecfrUNyrw7A9JAYmdYJzUKp",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDdT8kWJKSDGZXeBcJCBYEwpuvJtAPOH4m1M965bvLptz4bZfW_cwo-eZ32lz5Kxh6BLzNKE9bb78wigAyySqyB7AVSaB1ejR0zIQnVOg14Wed5BzKTPMWkazfBF_eD5JL9vTA2dMj9FDVR1InEzxYWCqc1A-d-1ubU0sau6C9JW6_WGUy1qfFTQDhwpXZD4YFJiEZiDOhRIsdHB1FLZEUecV8fdSjbMDIUuAepGPc9JbjFyk3VE4ggPdvcCZKiCWMh8sUZRboGXj3v",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBUPnMOteDeW8u4-CwBeojtKHbWJtrafBXVV1GAYPvzl7HncGq8rie3JK9Tkjr7nEuYp23XlYXxlwXMaZzzWQ05P4h46M-Odaxlf-5pR8nRt71NB9vdmMP1OGN1Mph5vD9TQqsXHMFyhVRI6bn1fK-dOt28eKzUft3naX89_u5avnKKoBAJ55ikivBTpPeftwpIh13IoKWUipPUUmnCN2_Z-aPZj2vxlcGAaBt9MG3j2Lf1h9HDK8qEZNYXAzRTqQHjEvtQs4w342bS",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBh7e-uYTAqCoBl89E_pHIoKLyHM6fnA9rMbrP1mAT9LQp99_v_7Sk0F37ltYj6oMe_8LgwkIS_JeQo6vWJMWUwkvyM16VLVZ_nTQ1UKWE0Hbo8fyplcHrm9E37YKpeoNWCJza-pzCQDX_cVlSyjUIEXQn3F4s9bDk4ev7-F8gewMOYPa6fZq7EAK4F04zcueRENN6Ppwv06pmNg7o3aPlaUKomq_qb5cQ6W9Aw4ix5MOx6shLESZZLaecfrUNyrw7A9JAYmdYJzUKp"
  ];

  return (
    <section className="py-16 bg-surface overflow-hidden border-y border-outline-variant/10">
      <div className="flex whitespace-nowrap gap-12 items-center animate-marquee">
        {[...logos, ...logos].map((logo, i) => (
          <img 
            key={i}
            className="h-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" 
            src={logo} 
            alt="Partner Logo"
            referrerPolicy="no-referrer"
          />
        ))}
      </div>
    </section>
  );
}
