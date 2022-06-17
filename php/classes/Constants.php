<?php

class ParentClass
{
    const CONST1 = "parent constant";
}

class ChildClass extends ParentClass
{
    const CONST1 = "child constant";
}

echo ChildClass::CONST1 . "\n"; // child constant
