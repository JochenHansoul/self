<?php

class ParentClass
{
    public function useThis(): string
    {
        //return $this::returnString();
        return $this->returnString(); // :: or -> is the same result
    }

    public function useSelf(): string
    {
        return self::returnString();
        //return self->returnString(); // PHP fatal error
    }

    public function returnString(): string
    {
        return 'ParentClass';
    }
}

class ChildClass extends ParentClass
{
    public function returnString(): string
    {
        return 'ChildClass';
    }
}


// methods
$childClass = new ChildClass();
echo $childClass->useThis() . "\n"; // ParentClass
echo $childClass->useSelf() . "\n"; // ChildClass
