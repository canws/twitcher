@extends('admin.base')

@section('section_title')
<strong>{{ __('Send Mail') }}</strong>
<br />
<a href="{{route('admin.send-mail.index')}}" class="text-indigo-700 font-semibold hover:underline">
    {{ __('Back') }}
</a>
@endsection

@section('section_body')
<div class="container">
    <form method="POST" action="{{ route('admin.send-mail.store') }}">
        {{ csrf_field() }}
        <div class="items-center bg-white rounded p-3">
            <x-label class="mt-5">{{ __("Select Emails") }}</x-label>
            <select name="receiver_email[]" class="w-full my-2 select2" multiple>
                @foreach ($all as $user)
                    <option value="{{ $user->email }}">{{ $user->email }}</option>
                @endforeach
            </select>

            @if ($errors->has('receiver_email'))
                <span class="text-red-600">{{ $errors->first('receiver_email') }}</span>
            @endif
            <x-label class="mt-5">{{ __("Input Code") }}</x-label>
            <x-textarea class="my-2" name="message" class="w-full"></x-textarea>
            @if ($errors->has('message'))
                <span class="text-red-600">{{ $errors->first('message') }}</span>
            @endif
            <div class="m-auto mt-3">
                <x-button>{{ __('Save') }}</x-button>
            </div>
        </div><!-- /.col-xs-12 col-md-6 -->
    </form>
<div>

<!-- Include jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<!-- Include the Select2 CSS -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css" rel="stylesheet" />

<!-- Include the Select2 JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js"></script>

<!-- Initialize Select2 for your select element -->
<script>
    $(document).ready(function() {
        $('.select2').select2();
    });
</script>

@endsection
