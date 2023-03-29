<?php

class ParentClass
{
    public function returnString(): string
    {
        return 'ParentClass';
    }

    public function useThis(): string
    {
        return $this->returnString(); // :: or -> is the same result
        //return $this::returnString();
    }

    public function useSelf(): string
    {
        return self::returnString();
    }

    public function useStatic(): string
    {
        return static::returnString();
    }
}

class ChildClass extends ParentClass
{
    public function returnString(): string
    {
        return 'ChildClass';
    }

    public function useNothing(): string
    {
        return returnString();
    }
}


// methods
$childClass = new ChildClass();
//echo $childClass->useNothing() . "\n"; // Uncaught Error: Call to undefined function returnString()
echo "this: ", $childClass->useThis() . "\n"; // ChildClass
echo "self: ", $childClass->useSelf() . "\n"; // ParentClass
echo "stat: ", $childClass->useStatic() . "\n"; // ChildClass
