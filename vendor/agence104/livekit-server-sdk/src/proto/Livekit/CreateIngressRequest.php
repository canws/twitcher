<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: livekit_ingress.proto

namespace Livekit;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>livekit.CreateIngressRequest</code>
 */
class CreateIngressRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.livekit.IngressInput input_type = 1;</code>
     */
    protected $input_type = 0;
    /**
     * Where to pull media from, only for URL input type
     *
     * Generated from protobuf field <code>string url = 9;</code>
     */
    protected $url = '';
    /**
     * User provided identifier for the ingress
     *
     * Generated from protobuf field <code>string name = 2;</code>
     */
    protected $name = '';
    /**
     * room to publish to
     *
     * Generated from protobuf field <code>string room_name = 3;</code>
     */
    protected $room_name = '';
    /**
     * publish as participant
     *
     * Generated from protobuf field <code>string participant_identity = 4;</code>
     */
    protected $participant_identity = '';
    /**
     * name of publishing participant (used for display only)
     *
     * Generated from protobuf field <code>string participant_name = 5;</code>
     */
    protected $participant_name = '';
    /**
     * metadata associated with the publishing participant
     *
     * Generated from protobuf field <code>string participant_metadata = 10;</code>
     */
    protected $participant_metadata = '';
    /**
     * whether to pass through the incoming media without transcoding, only compatible with some input types
     *
     * Generated from protobuf field <code>bool bypass_transcoding = 8;</code>
     */
    protected $bypass_transcoding = false;
    /**
     * Generated from protobuf field <code>.livekit.IngressAudioOptions audio = 6;</code>
     */
    protected $audio = null;
    /**
     * Generated from protobuf field <code>.livekit.IngressVideoOptions video = 7;</code>
     */
    protected $video = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $input_type
     *     @type string $url
     *           Where to pull media from, only for URL input type
     *     @type string $name
     *           User provided identifier for the ingress
     *     @type string $room_name
     *           room to publish to
     *     @type string $participant_identity
     *           publish as participant
     *     @type string $participant_name
     *           name of publishing participant (used for display only)
     *     @type string $participant_metadata
     *           metadata associated with the publishing participant
     *     @type bool $bypass_transcoding
     *           whether to pass through the incoming media without transcoding, only compatible with some input types
     *     @type \Livekit\IngressAudioOptions $audio
     *     @type \Livekit\IngressVideoOptions $video
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\LivekitIngress::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.livekit.IngressInput input_type = 1;</code>
     * @return int
     */
    public function getInputType()
    {
        return $this->input_type;
    }

    /**
     * Generated from protobuf field <code>.livekit.IngressInput input_type = 1;</code>
     * @param int $var
     * @return $this
     */
    public function setInputType($var)
    {
        GPBUtil::checkEnum($var, \Livekit\IngressInput::class);
        $this->input_type = $var;

        return $this;
    }

    /**
     * Where to pull media from, only for URL input type
     *
     * Generated from protobuf field <code>string url = 9;</code>
     * @return string
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * Where to pull media from, only for URL input type
     *
     * Generated from protobuf field <code>string url = 9;</code>
     * @param string $var
     * @return $this
     */
    public function setUrl($var)
    {
        GPBUtil::checkString($var, True);
        $this->url = $var;

        return $this;
    }

    /**
     * User provided identifier for the ingress
     *
     * Generated from protobuf field <code>string name = 2;</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * User provided identifier for the ingress
     *
     * Generated from protobuf field <code>string name = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setName($var)
    {
        GPBUtil::checkString($var, True);
        $this->name = $var;

        return $this;
    }

    /**
     * room to publish to
     *
     * Generated from protobuf field <code>string room_name = 3;</code>
     * @return string
     */
    public function getRoomName()
    {
        return $this->room_name;
    }

    /**
     * room to publish to
     *
     * Generated from protobuf field <code>string room_name = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setRoomName($var)
    {
        GPBUtil::checkString($var, True);
        $this->room_name = $var;

        return $this;
    }

    /**
     * publish as participant
     *
     * Generated from protobuf field <code>string participant_identity = 4;</code>
     * @return string
     */
    public function getParticipantIdentity()
    {
        return $this->participant_identity;
    }

    /**
     * publish as participant
     *
     * Generated from protobuf field <code>string participant_identity = 4;</code>
     * @param string $var
     * @return $this
     */
    public function setParticipantIdentity($var)
    {
        GPBUtil::checkString($var, True);
        $this->participant_identity = $var;

        return $this;
    }

    /**
     * name of publishing participant (used for display only)
     *
     * Generated from protobuf field <code>string participant_name = 5;</code>
     * @return string
     */
    public function getParticipantName()
    {
        return $this->participant_name;
    }

    /**
     * name of publishing participant (used for display only)
     *
     * Generated from protobuf field <code>string participant_name = 5;</code>
     * @param string $var
     * @return $this
     */
    public function setParticipantName($var)
    {
        GPBUtil::checkString($var, True);
        $this->participant_name = $var;

        return $this;
    }

    /**
     * metadata associated with the publishing participant
     *
     * Generated from protobuf field <code>string participant_metadata = 10;</code>
     * @return string
     */
    public function getParticipantMetadata()
    {
        return $this->participant_metadata;
    }

    /**
     * metadata associated with the publishing participant
     *
     * Generated from protobuf field <code>string participant_metadata = 10;</code>
     * @param string $var
     * @return $this
     */
    public function setParticipantMetadata($var)
    {
        GPBUtil::checkString($var, True);
        $this->participant_metadata = $var;

        return $this;
    }

    /**
     * whether to pass through the incoming media without transcoding, only compatible with some input types
     *
     * Generated from protobuf field <code>bool bypass_transcoding = 8;</code>
     * @return bool
     */
    public function getBypassTranscoding()
    {
        return $this->bypass_transcoding;
    }

    /**
     * whether to pass through the incoming media without transcoding, only compatible with some input types
     *
     * Generated from protobuf field <code>bool bypass_transcoding = 8;</code>
     * @param bool $var
     * @return $this
     */
    public function setBypassTranscoding($var)
    {
        GPBUtil::checkBool($var);
        $this->bypass_transcoding = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.livekit.IngressAudioOptions audio = 6;</code>
     * @return \Livekit\IngressAudioOptions|null
     */
    public function getAudio()
    {
        return $this->audio;
    }

    public function hasAudio()
    {
        return isset($this->audio);
    }

    public function clearAudio()
    {
        unset($this->audio);
    }

    /**
     * Generated from protobuf field <code>.livekit.IngressAudioOptions audio = 6;</code>
     * @param \Livekit\IngressAudioOptions $var
     * @return $this
     */
    public function setAudio($var)
    {
        GPBUtil::checkMessage($var, \Livekit\IngressAudioOptions::class);
        $this->audio = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.livekit.IngressVideoOptions video = 7;</code>
     * @return \Livekit\IngressVideoOptions|null
     */
    public function getVideo()
    {
        return $this->video;
    }

    public function hasVideo()
    {
        return isset($this->video);
    }

    public function clearVideo()
    {
        unset($this->video);
    }

    /**
     * Generated from protobuf field <code>.livekit.IngressVideoOptions video = 7;</code>
     * @param \Livekit\IngressVideoOptions $var
     * @return $this
     */
    public function setVideo($var)
    {
        GPBUtil::checkMessage($var, \Livekit\IngressVideoOptions::class);
        $this->video = $var;

        return $this;
    }

}

