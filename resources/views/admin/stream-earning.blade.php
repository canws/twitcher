@extends('admin.base')

@section('section_title')
<strong>{{ __(':type Earning', ['type' => ucfirst($active)]) }}</strong>
@endsection

@section('section_body')
<table class="text-stone-600 table border-collapse w-full bg-white dataTable">
    <thead>
        <tr>
            <x-th>{{ __('ID') }}</x-th>
            <x-th>{{ __('Username') }}</x-th>
            <x-th>{{ __('Stream Eraning') }}</x-th>
            <x-th>{{ __('Tips Eraning') }}</x-th>
            <x-th>{{ __('Total Eraning') }}</x-th>
        </tr>
    </thead>
    <tbody>
        @foreach ($stremerData as $userData)
        <tr>
            <x-td>
                <x-slot name="field">{{ __('ID') }}</x-slot>
                {{ $userData['user']->id }}
            </x-td>
    
            <x-td>
                <x-slot name="field">{{ __('Username') }}</x-slot>
                {{ $userData['user']->username }}
            </x-td>
    
            <x-td>
                <x-slot name="field">{{ __('Stream Eraning') }}</x-slot>
                <span class="inline-flex px-2 py-1 bg-indigo-50 text-indigo-700 rounded-lg">
                    {{ $userData['totalEarnings'] }}
                </span>
            </x-td>
            <x-td>
                <x-slot name="field">{{ __('Tips Eraning') }}</x-slot>
                <span class="inline-flex px-2 py-1 bg-indigo-50 text-indigo-700 rounded-lg">
                    {{ $userData['totalTipsReceived'] }}
                </span>
            </x-td>
            <x-td>
                <x-slot name="field">{{ __('Total Eraning') }}</x-slot>
                <span class="inline-flex px-2 py-1 rounded-lg text-white bg-cyan-500">
                    {{ $userData['totalEarnings']+$userData['totalTipsReceived'] }}
                </span>
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