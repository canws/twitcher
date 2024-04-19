<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: livekit_models.proto

namespace Livekit\Encryption;

use UnexpectedValueException;

/**
 * Protobuf type <code>livekit.Encryption.Type</code>
 */
class Type
{
    /**
     * Generated from protobuf enum <code>NONE = 0;</code>
     */
    const NONE = 0;
    /**
     * Generated from protobuf enum <code>GCM = 1;</code>
     */
    const GCM = 1;
    /**
     * Generated from protobuf enum <code>CUSTOM = 2;</code>
     */
    const CUSTOM = 2;

    private static $valueToName = [
        self::NONE => 'NONE',
        self::GCM => 'GCM',
        self::CUSTOM => 'CUSTOM',
    ];

    public static function name($value)
    {
        if (!isset(self::$valueToName[$value])) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no name defined for value %s', __CLASS__, $value));
        }
        return self::$valueToName[$value];
    }


    public static function value($name)
    {
        $const = __CLASS__ . '::' . strtoupper($name);
        if (!defined($const)) {
            throw new UnexpectedValueException(sprintf(
                    'Enum %s has no value defined for name %s', __CLASS__, $name));
        }
        return constant($const);
    }
}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Type::class, \Livekit\Encryption_Type::class);

