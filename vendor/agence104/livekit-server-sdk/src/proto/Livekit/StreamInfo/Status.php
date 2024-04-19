<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: livekit_egress.proto

namespace Livekit\StreamInfo;

use UnexpectedValueException;

/**
 * Protobuf type <code>livekit.StreamInfo.Status</code>
 */
class Status
{
    /**
     * Generated from protobuf enum <code>ACTIVE = 0;</code>
     */
    const ACTIVE = 0;
    /**
     * Generated from protobuf enum <code>FINISHED = 1;</code>
     */
    const FINISHED = 1;
    /**
     * Generated from protobuf enum <code>FAILED = 2;</code>
     */
    const FAILED = 2;

    private static $valueToName = [
        self::ACTIVE => 'ACTIVE',
        self::FINISHED => 'FINISHED',
        self::FAILED => 'FAILED',
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
class_alias(Status::class, \Livekit\StreamInfo_Status::class);
