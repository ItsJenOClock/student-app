import './StudentList.css';
import Student from './Student';

const StudentList = () => {
const headingClass = 'student-list__heading';
const listClass = 'student-list';
return (
    <section>
        <h2 className={headingClass}>Student List</h2>
        <ul className={listClass}>
          <li><Student name="Ada" email="ada@dev.org"></Student></li>
          <li><Student name="Soo-ah" email="sooah@dev.org"></Student></li>
          <li><Student name="Chrissy" email="chrissy@dev.org"></Student></li>
        </ul>
    </section>
);
};

export default StudentList;