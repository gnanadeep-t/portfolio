import SkillCard from "./SkillCard";

let Skills = () => {
  let img = [
    "https://i.pinimg.com/564x/94/5d/83/945d8320b2991e7345ea0dda5ee1b6bb.jpg",
    "https://diziglobalsolution.com/wp-content/uploads/2023/04/logo-css-3-1536.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433",
    "https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAADdCAMAAACc/C7aAAAAilBMVEXLODf////ILizhkJHKNTTNQkHKMjHRcXDVeHjILy7//PzLOTjMUFD45eTXb2/WbWvHJSPov7/GHR3GFRHWiorIKSjCAADPYWDjsbHelJTcgYDENjbptrTGGxbehofy2NjOWVn88vLeiorjm5vnqanMQkDvy8vECwnXhITLR0f0397ira377ezObW3ooe4FAAADvElEQVR4nO3dAVOiQBiAYQMi0UrSlPDK0usuq+v//71T2CUEEURSvvV9b2aHg2XxqWbqJvA6F2dQ59Qv4BiBNCWQpgTSlECaEkhTAmlKIE0JpCmdO7KXGqOt7x297TPizdTBXvrEi+yJ2R3p5aou2tt2RrZi5ON0EYaL2TRcj6vNcDqLNmfR5nqczewwtKNxtrEj2pxG4/rEjTVyi870ovbuRe2ti071omH3sQZy4XuW5XmrIRk3Nzd37Dy4OWPXtOJFt72E9DF/UQNpWx1RWTZIkGICCVJQIEEKCmQh0jv1y96vWsjfZ/GZBNm+QIIUFEiQggIJUlAgQQoKJEhBgQQpKJAgBQUSpKBAFhWeA/IsPpMgWxhIkIICCVJQIEEKCmQ50ml1zSDd98v29ufSbQR5+a9wTht6cZpAOjc/8dqaqncNMgokyJYEUgUyg3y+6pZ19VfNfexOS+fqB3QfytfNn3z3Q8i7N6+skX7m1n6yyppo5NIvXTfXUD/32jhy2ClrqJGh3y+bO9LI+xoPZ4w16ZRI2y+dCxIkSJB1kM76fQxWf5JXuQPpqu8cydwdSGe9bHpdx7LiC+l/Ih8P6V4vp1FLfe1ipDtYxnX1usVI51rNXapvRM673hG4x0aOk3ei+FWK9B/UkY9RvwxpherIfNJXHyF9oQf/6MhpDeRzBeS9OnKjkE4AEiRIkCBBggQJEiRIkCDzyHH4HPc47hiL7Iyf4ob6VgYTkZ1+XPJ3I5HZQIIECfIwpHMIMnurYgoZ73CPiJw8bTbp6snDkdpTiHS8p+zZyW+ac+tq5Ic68natL/Sp9kx+6jfN+1T8Y13DgVSBBLk7kE12SmTuPp6WI/t1bs/O3ZE1+iFkU7dnD64q96XP/gxuNwuSm+Huv6qvVyH9E+Whj0y4lRvt+JBr5ItVfb0KdZpB7tGwCtItX6dGIEHuG0iQB3e890H3y5EXQYuQtT6Tnlvh/vHGfVE8JApSUCBBCgokSEGBBCkokCAFBRKkoECCFBRIkIICed5I/uPb9sWXK0hBgQQpKJAgBQUSpKBAghQUSJCCAglSUCBBCgokSEHVQi589YCilxpTRTs8LzMjN9nbPpbPS29m5+V2rPIXhZRi5Ov6WdbBYJCMQbDaMwiCQTyo3ekZerxN5m09ltqOV1Jjbo3vMZ4RvYKiywavNZC9bPP5PBqTze1dpCdv7Nsxr3i55OIll12vuD9yC3uPua1qH6TYQJoSSFMCaUogTQmkKYE0JZCmBNKUQJoSSFM6C+R/+zr6HJIzrEkAAAAASUVORK5CYII=",
    "data:image/png;base64,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"
  ];
  return (
    <div className="skills-con" id="skills">
      <h1>Skills</h1>
      <div className="skills">
        <SkillCard logo={<i className="fa-brands fa-html5"></i>} text="HTML" />
        <SkillCard
          logo={<i className="fa-brands fa-css3-alt"></i>}
          text="CSS"
        />
        <SkillCard
          logo={<i className="fa-brands fa-js"></i>}
          text="JavaScript"
        />
        <SkillCard
          logo={<i className="fa-brands fa-react"></i>}
          text="React Js"
        />
        <SkillCard logo={<i className="fa-brands fa-npm"></i>} text="NPM" />
        <SkillCard
          logo={<i className="fa-brands fa-node-js"></i>}
          text="Node Js"
        />
        <SkillCard
          logo={<i class="fa-brands fa-git"></i>}
          text="Git"
        />
      </div>
    </div>
  );
};
export default Skills;
