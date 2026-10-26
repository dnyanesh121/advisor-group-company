// Images ko `public/blogs/` folder me rakho
// Title aur desc abhi placeholder hai (screenshot jaisa), apne blog se badal lena
import blog1 from '../assets/BlogImages/Blog1.png';
import blog2 from '../assets/BlogImages/Blog2.png';
import blog3 from '../assets/BlogImages/Blog3.png';

const blogs = [
  {
    id: 1,
    title: 'Blog',
    desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.',
    image: blog1,
    href: '#',
  },
  {
    id: 2,
    title: 'Blog',
    desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.',
    image: blog2,
    href: '#',
  },
  {
    id: 3,
    title: 'Blog',
    desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.',
    image: blog3,
    href: '#',
  },
];

export default blogs;