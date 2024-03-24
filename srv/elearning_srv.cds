using app.elearning from '../db/elearning';

service eLearning {
    entity Categories as projection on elearning.Categories;
    entity Courses as projection on elearning.Courses;

}