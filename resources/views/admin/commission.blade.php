@extends('admin.base')

@section('section_title')
<strong>{{ __(':type Sales', ['type' => ucfirst($active)]) }}</strong>
@endsection

@section('section_body')
<table class="text-stone-600 table border-collapse w-full bg-white dataTable">
    <thead>
        <tr>
            <x-th>{{ __('ID') }}</x-th>
            <x-th>{{ __('Username') }}</x-th>
            <x-th>{{ __('Commission Type') }}</x-th>
            <x-th>{{ __('Tokens') }}</x-th>
        </tr>
    </thead>
    <tbody>
        @foreach ($commData as $userData)
        <tr>
            <x-td>
                <x-slot name="field">{{ __('ID') }}</x-slot>
                {{ $userData->id ?? '' }}
            </x-td>
    
            @php
                $users = App\Models\User::where('id',$userData->streamer_id)->first();
            @endphp
            <x-td>
                <x-slot name="field">{{ __('Username') }}</x-slot>
                {{ $users->username ?? '' }}
            </x-td>
    
            <x-td>
                <x-slot name="field">{{ __('Commission Type') }}</x-slot>
                {{ $userData->type ?? '' }}
            </x-td>
            <x-td>
                <x-slot name="field">{{ __('Tokens') }}</x-slot>
                {{ $userData->tokens ?? '' }}
            </x-td>
        </tr>
    @endforeach
     
    </tbody>
</table>
@endsection

@section('extra_bottom')
@if (count($errors) > 0)
<div class="alert alert-danger">
    <ul>
        @foreach ($errors->all() as $error)
        <li>{{ $error }}</li>
        @endforeach
    </ul>
</div>
@endif
@endsection

@push('adminExtraJS')
<script src="{{ asset('js/jquery.min.js') }}"></script>
<script src="{{ asset('js/datatables/datatables.min.js') }}"></script>
{{-- attention, dynamic because only needed on this page to save resources --}}
<script>
    $(document).ready(function() {
        $('.dataTable').dataTable({ordering:false});
    });
</script>
@endpush