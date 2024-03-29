using app.elearning from '../db/elearning';

service eLearning @(required: 'authenticated-user') {
    entity Categories @(restrict: [
        {
            grant: ['*'],
            to   : 'ElearningAdmin'
        },
        {
            grant: ['READ'],
            to   : 'ElearninRead'
        }
    ]) as projection on elearning.Categories; 

    entity Courses @(restrict: [
        {
            grant: [
                'WRITE',
                'UPDATE',
                'DELETE'
            ],
            to   : 'ElearningSAP'
        },
        {
            grant: ['READ'],
            to   : 'ElearningSAP',
            where: ' course_name =  `SAP` '
        }
    ]) as projection on elearning.Courses;

}
