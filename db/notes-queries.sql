--SELECT * FROM Notes;

--SELECT * FROM Notes LIMIT 5;

--SELECT * FROM Notes
--  ORDER BY id ASC;

--SELECT * FROM Notes
  --ORDER BY content ASC;

--SELECT * FROM Notes
  --ORDER BY title ASC;

--SELECT * FROM Notes
  --ORDER BY id DESC;

--SELECT * FROM Notes
  --ORDER BY title DESC;

--SELECT * FROM Notes 
  --WHERE title = '5 life lessons learned from cats';

--SELECT * FROM Notes 
  --WHERE title like '%lady gaga%';

--INSERT INTO Notes
--(title,content) VALUES
--('5 life lessons learned from cats','');


INSERT INTO Notes
(title,content) VALUES
('','Posuere sollicitudin aliquam ultrices sagittis orci a. Feugiat sed lectus vestibulum mattis ullamcorper velit. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Velit egestas dui id ornare arcu odio. Molestie at elementum eu facilisis sed odio morbi. Tempor nec feugiat nisl pretium. At tempor commodo ullamcorper a lacus. Egestas dui id ornare arcu odio. Id cursus metus aliquam eleifend. Vitae sapien pellentesque habitant morbi tristique. Dis parturient montes nascetur ridiculus. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Aliquam faucibus purus in massa tempor nec feugiat nisl.');

DELETE FROM Notes WHERE id = 1000;