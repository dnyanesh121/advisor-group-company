// Photos ko `public/founders/` folder me rakho (square ya portrait photo chalega)
// Bio ka aakhri hissa maine complete kiya hai, apne asli text se badal lena
import founder1 from '../assets/FounderImages/FounderImg.png';
import founder2 from '../assets/FounderImages/CoFounderImg.png';
import founder3 from '../assets/FounderImages/CoFounderDirectorImg.png';

const founders = [
  {
    id: 1,
    name: 'Mr Jagdish Prasad Agarwalla',
    role: 'Founder',
    photo: founder1,
    bio: "Mr Jagdish Aggarwalla began his journey in the insurance industry in 1972 with National Insurance Company Limited (formerly Ruby General Insurance Company) as a Development Officer. He founded First Advisor Group in 2006 as a proprietorship firm with in-depth experience and understanding of client needs. Mr Jagdish's commitment to service excellence and ethical business practices laid a strong foundation for the Group.",
  },
  {
    id: 2,
    name: 'Mr Vikaas Kumar Tulsyan',
    role: 'Co-Founder & Director',
    photo: founder2,
    bio: "Mr Vikas is an alumnus of the prestigious Indian Institute of Management (IIM) and has been associated with the insurance industry since 2000. He has actively participated in the wealth management programme. He has over two decades of experience in the insurance industry. His expertise has contributed to developing business strategy and business development of First Advisors Group. His leadership strengthens the Group's growth.",
  },
  {
    id: 3,
    name: 'Mr Chetan Tulsyan',
    role: 'Co-Founder & Director',
    photo: founder3,
    bio: "Mr Chetan brings nearly two decades of professional experience in the insurance sector, from the beginning of his career in 2003. His core expertise lies in operational excellence, client servicing and product innovation. He is recognised for his hands-on leadership style and commitment to building enduring customer relationships. He plays a key role in strengthening the Group's market presence and client trust.",
  },
];

export default founders;