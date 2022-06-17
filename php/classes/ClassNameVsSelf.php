<?php

/*
There is indeed a small diference.
self:: forwards static calls, while className:: doesn't.
This only matters for late static bindings in PHP 5.3+.

In static calls, PHP 5.3+ remembers the initially called class.
Using className:: makes PHP "forget" this value (i.e., resets it to className),
while self:: preserves it. Consider:
*/

abstract class AbstractClass
{
    static function getClassName(): string
    {
        return get_called_class();
    }
}

class ParentClass extends AbstractClass
{
    static function useSelf(): string
    {
        return self::getClassName();
    }

    static function useClassName(): string
    {
        return ParentClass::getClassName();
    }
}

class ChildClass extends ParentClass {}


// code
echo ParentClass::useSelf() . "\n";      // ParentClass
echo ParentClass::useClassName() . "\n"; // ParentClass
echo ChildClass::useSelf() . "\n";       // ChildClass
echo ChildClass::useClassName() . "\n";  // ParentClass <- not the correct classname
